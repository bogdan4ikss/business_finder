"use client"

import { useEffect, useRef } from "react"

// Fractional coordinates (0..1 of width/height) so the layout scales to any
// container size. Roads are simple cubic bezier chains, echoing the little
// map mockup in the dashboard card but spread across the whole section.
type Point = [number, number]
type RoadSegment = { cp1: Point; cp2: Point; end: Point }
type Road = { start: Point; segments: RoadSegment[] }

const ROADS: Road[] = [
  {
    start: [-0.05, 0.25],
    segments: [
      { cp1: [0.2, 0.05], cp2: [0.35, 0.3], end: [0.55, 0.15] },
      { cp1: [0.75, 0.0], cp2: [0.95, 0.4], end: [1.05, 0.32] },
    ],
  },
  {
    start: [-0.05, 0.78],
    segments: [
      { cp1: [0.15, 0.95], cp2: [0.3, 0.5], end: [0.5, 0.58] },
      { cp1: [0.7, 0.65], cp2: [0.85, 0.45], end: [1.05, 0.68] },
    ],
  },
  {
    start: [0.3, -0.05],
    segments: [
      { cp1: [0.36, 0.2], cp2: [0.25, 0.35], end: [0.34, 0.55] },
      { cp1: [0.42, 0.75], cp2: [0.3, 0.9], end: [0.4, 1.05] },
    ],
  },
  {
    start: [0.72, -0.05],
    segments: [
      { cp1: [0.65, 0.2], cp2: [0.78, 0.35], end: [0.68, 0.5] },
      { cp1: [0.58, 0.65], cp2: [0.72, 0.85], end: [0.76, 1.05] },
    ],
  },
  {
    start: [-0.05, 0.5],
    segments: [{ cp1: [0.15, 0.38], cp2: [0.35, 0.55], end: [0.62, 0.46] }],
  },
]

// A handful of "found business" points that pulse. Positions are hand
// placed rather than a perfect grid, so it reads as organic, not decorative.
const PULSE_DOTS = [
  { x: 0.09, y: 0.24, r: 2.4, phase: 0.2, speed: 0.5 },
  { x: 0.24, y: 0.64, r: 2.8, phase: 1.6, speed: 0.4 },
  { x: 0.4, y: 0.18, r: 2, phase: 3.1, speed: 0.6 },
  { x: 0.52, y: 0.72, r: 3.2, phase: 0.8, speed: 0.35 },
  { x: 0.63, y: 0.32, r: 2.2, phase: 2.4, speed: 0.55 },
  { x: 0.76, y: 0.58, r: 2.6, phase: 4.0, speed: 0.45 },
  { x: 0.87, y: 0.22, r: 2, phase: 1.1, speed: 0.5 },
  { x: 0.31, y: 0.86, r: 2.4, phase: 3.6, speed: 0.4 },
]

const GRID_SPACING = 26 // px, at 1x scale

// Fixed lime accent matching the brand's primary. Canvas can't read Tailwind's
// oklch tokens directly, so this is a plain approximation of --primary — swap
// the RGB triplet below if the exact shade drifts from your theme.
const ACCENT_RGB = "132, 204, 22"

export function MapBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    const context = canvasEl?.getContext("2d")
    if (!canvasEl || !context) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    // Neutral line/grid color follows the current theme (light/dark) by
    // reading the resolved `color` of the canvas element — set via the
    // `text-foreground` class below. Used as-is (works for rgb(), oklch(),
    // anything) with opacity applied via globalAlpha rather than parsed,
    // since the computed format isn't guaranteed to be rgb().
    const lineColor = getComputedStyle(canvasEl).color

    let width = 0
    let height = 0
    let dpr = 1
    let staticLayer: HTMLCanvasElement | null = null
    let rafId = 0

    function layoutStatic() {
      if (!canvasEl) return
      staticLayer = document.createElement("canvas")
      staticLayer.width = canvasEl.width
      staticLayer.height = canvasEl.height
      const sctx = staticLayer.getContext("2d")
      if (!sctx) return
      sctx.scale(dpr, dpr)

      // dot grid
      sctx.globalAlpha = 0.05
      sctx.fillStyle = lineColor
      for (let x = GRID_SPACING / 2; x < width; x += GRID_SPACING) {
        for (let y = GRID_SPACING / 2; y < height; y += GRID_SPACING) {
          sctx.beginPath()
          sctx.arc(x, y, 0.7, 0, Math.PI * 2)
          sctx.fill()
        }
      }

      // roads
      sctx.globalAlpha = 0.06
      sctx.strokeStyle = lineColor
      sctx.lineWidth = 1.4
      sctx.lineCap = "round"
      for (const road of ROADS) {
        sctx.beginPath()
        sctx.moveTo(road.start[0] * width, road.start[1] * height)
        for (const seg of road.segments) {
          sctx.bezierCurveTo(
            seg.cp1[0] * width,
            seg.cp1[1] * height,
            seg.cp2[0] * width,
            seg.cp2[1] * height,
            seg.end[0] * width,
            seg.end[1] * height
          )
        }
        sctx.stroke()
      }
      sctx.globalAlpha = 1
    }

    function resize() {
      if (!canvasEl) return
      const rect = canvasEl.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasEl.width = width * dpr
      canvasEl.height = height * dpr
      layoutStatic()
    }

    function drawFrame(time: number) {
      if (!context || !canvasEl) return
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.clearRect(0, 0, canvasEl.width, canvasEl.height)
      if (staticLayer) context.drawImage(staticLayer, 0, 0)

      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      for (const dot of PULSE_DOTS) {
        const x = dot.x * width
        const y = dot.y * height
        const t = prefersReducedMotion
          ? 0.5
          : (Math.sin(time * dot.speed + dot.phase) + 1) / 2
        const radius = dot.r * (0.85 + t * 0.5)
        const glowAlpha = 0.06 + t * 0.16
        const coreAlpha = 0.25 + t * 0.45

        const glow = context.createRadialGradient(x, y, 0, x, y, radius * 5)
        glow.addColorStop(0, `rgba(${ACCENT_RGB}, ${glowAlpha})`)
        glow.addColorStop(1, `rgba(${ACCENT_RGB}, 0)`)
        context.fillStyle = glow
        context.beginPath()
        context.arc(x, y, radius * 5, 0, Math.PI * 2)
        context.fill()

        context.fillStyle = `rgba(${ACCENT_RGB}, ${coreAlpha})`
        context.beginPath()
        context.arc(x, y, radius, 0, Math.PI * 2)
        context.fill()
      }

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame((t) => drawFrame(t / 1000))
      }
    }

    resize()
    drawFrame(0)

    const observer = new ResizeObserver(() => {
      resize()
      drawFrame(0)
    })
    observer.observe(canvasEl)

    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-foreground"
    />
  )
}
