export type Organization = {
  id: string
  name: string
  category: string
  city: string
  address: string
  rating: number
  reviews: number
  phone: string
  email?: string
  website?: string
  social?: string
  score: number
  status: "Новый" | "В работе" | "Связались"
  hours: string
  opportunity: string
}

export const organizations: Organization[] = [
  { id: "volna", name: "Студия «Волна»", category: "Салон красоты", city: "Москва", address: "ул. Покровка, 19", rating: 4.8, reviews: 126, phone: "+7 495 320-18-04", email: "hello@volna.ru", social: "vk.com/volna", score: 92, status: "Новый", hours: "Ежедневно, 10:00–21:00", opportunity: "У компании высокий рейтинг и активные отзывы, но нет собственного сайта для записи и продвижения услуг." },
  { id: "sever-coffee", name: "Кофейня «Север»", category: "Кофейня", city: "Санкт-Петербург", address: "Литейный пр., 32", rating: 4.7, reviews: 284, phone: "+7 812 614-22-40", email: "team@sever.coffee", website: "sever.coffee", social: "t.me/severcoffee", score: 76, status: "В работе", hours: "Ежедневно, 08:00–23:00", opportunity: "Сайт устарел и не показывает сезонное меню. Можно предложить редизайн и онлайн-заказ." },
  { id: "profi-dent", name: "Профи Дент", category: "Стоматология", city: "Казань", address: "ул. Баумана, 51", rating: 4.9, reviews: 98, phone: "+7 843 211-09-18", email: "info@profident.ru", score: 95, status: "Новый", hours: "Пн–Сб, 09:00–20:00", opportunity: "Клиника получает отличные отзывы, но у неё нет сайта и удобной формы первичной записи." },
  { id: "forma", name: "Фитнес-студия Forma", category: "Фитнес", city: "Москва", address: "Ходынский бул., 4", rating: 4.6, reviews: 73, phone: "+7 495 109-33-15", website: "forma.fit", social: "vk.com/forma_fit", score: 68, status: "Связались", hours: "Ежедневно, 07:00–23:00", opportunity: "Есть сайт, но отсутствует быстрый подбор абонемента и автоматическая запись на пробное занятие." },
  { id: "wood-and-home", name: "Wood & Home", category: "Мебель на заказ", city: "Екатеринбург", address: "ул. Малышева, 8", rating: 4.8, reviews: 45, phone: "+7 343 288-42-90", email: "order@woodhome.ru", social: "t.me/woodhome", score: 89, status: "Новый", hours: "Пн–Сб, 10:00–19:00", opportunity: "Компания продаёт визуальный продукт через соцсети, но теряет поисковый трафик без сайта-портфолио." },
  { id: "law-point", name: "ЮрТочка", category: "Юридические услуги", city: "Новосибирск", address: "Красный пр., 29", rating: 4.5, reviews: 64, phone: "+7 383 207-11-03", website: "lawpoint.ru", score: 71, status: "В работе", hours: "Пн–Пт, 09:00–18:00", opportunity: "Можно улучшить конверсию сайта с помощью понятных пакетов услуг и формы быстрой консультации." },
]

export const niches = ["Все ниши", "Салон красоты", "Кофейня", "Стоматология", "Фитнес", "Мебель на заказ", "Юридические услуги"]
export const cities = ["Все города", "Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Новосибирск"]
