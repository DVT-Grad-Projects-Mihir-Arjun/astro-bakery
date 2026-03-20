export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: "breads" | "pastries" | "cakes" | "drinks";
    image: string;
    available: boolean;
    featured?: boolean;
}

export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Sourdough Loaf",
        description: "Stone-baked with a crispy crust and soft, tangy crumb. Made with a 24-hour fermented starter.",
        price: 65,
        category: "breads",
        image: "https://images.pexels.com/photos/4881595/pexels-photo-4881595.jpeg",
        available: true,
        featured: true,
    },
    {
        id: 2,
        name: "Seeded Rye Bread",
        description: "Dense and hearty rye loaf packed with sunflower, pumpkin, and sesame seeds.",
        price: 55,
        category: "breads",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop",
        available: true,
    },
    {
        id: 3,
        name: "French Baguette",
        description: "Classic crispy baguette baked fresh every morning. Best enjoyed with butter.",
        price: 30,
        category: "breads",
        image: "https://images.pexels.com/photos/3789032/pexels-photo-3789032.jpeg",
        available: true,
    },
    {
        id: 4,
        name: "Butter Croissant",
        description: "Flaky, golden layers of pure buttery goodness. Made with French-imported butter.",
        price: 28,
        category: "pastries",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop",
        available: true,
        featured: true,
    },
    {
        id: 5,
        name: "Cinnamon Roll",
        description: "Soft, pillowy roll swirled with cinnamon sugar and topped with cream cheese glaze.",
        price: 35,
        category: "pastries",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&auto=format&fit=crop",
        available: true,
    },
    {
        id: 6,
        name: "Almond Danish",
        description: "Buttery pastry filled with almond cream and topped with flaked almonds and icing.",
        price: 32,
        category: "pastries",
        image: "https://images.pexels.com/photos/3354512/pexels-photo-3354512.jpeg",
        available: false,
    },
    {
        id: 7,
        name: "Lemon Drizzle Cake",
        description: "Light and zesty sponge soaked in lemon syrup with a crunchy sugar crust.",
        price: 180,
        category: "cakes",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&auto=format&fit=crop",
        available: true,
        featured: true,
    },
    {
        id: 8,
        name: "Chocolate Fudge Cake",
        description: "Rich triple-layer chocolate cake with velvety fudge frosting and ganache drizzle.",
        price: 220,
        category: "cakes",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop",
        available: true,
    },
    {
        id: 9,
        name: "Carrot Cake",
        description: "Moist spiced carrot cake with crushed walnuts and a thick cream cheese frosting.",
        price: 195,
        category: "cakes",
        image: "https://images.pexels.com/photos/6133479/pexels-photo-6133479.jpeg",
        available: true,
    },
    {
        id: 10,
        name: "Filter Coffee",
        description: "Freshly brewed single-origin filter coffee. Ask about today's roast.",
        price: 28,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop",
        available: true,
    },
    {
        id: 11,
        name: "Chai Latte",
        description: "House-made spiced chai concentrate with steamed oat milk and a dusting of cinnamon.",
        price: 38,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&auto=format&fit=crop",
        available: true,
    },
    {
        id: 12,
        name: "Fresh Orange Juice",
        description: "Cold-pressed juice squeezed to order from locally grown oranges.",
        price: 35,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&auto=format&fit=crop",
        available: true,
    },
];