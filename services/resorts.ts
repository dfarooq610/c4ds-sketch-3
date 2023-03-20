
type SkiResort = { 
    id: string,
    name: string,
    state: "NH" | "VT" | "ME",
    weekdayTicketPrice: number,
    weekendTicketPrice: number,
    averageRentalPrice: number,
    summary: string
}

export const NewEnglandSkiResorts = [
    {
        id: "bolton-valley",
        name: "Bolton Valley",
        state: "VT",
        weekdayTicketPrice: 89,
        weekendTicketPrice: 69,
        averageRentalPrice: 65,
        summary: "Bolton Valley is a ski resort in Vermont with over 300 acres of skiable terrain, 71 trails, and 6 lifts. It caters to all skill levels and offers snowshoeing, Nordic skiing, and backcountry skiing. The resort has lodging, dining options, and ski rentals."
    },
    {
        id: "bromley-mountain",
        name: "Bromley Mountain",
        state: "VT",
        weekdayTicketPrice: 96,
        weekendTicketPrice: 96,
        averageRentalPrice: 50,
        summary: "Bromley Mountain is a ski resort located in the southern region of Vermont, USA. It offers skiers and snowboarders 300 acres of skiable terrain with 47 trails and 11 lifts. The resort caters to all levels of ability, with beginner-friendly slopes, challenging expert runs, and everything in between. Alongside skiing and snowboarding, Bromley Mountain also offers ice skating, snowshoeing, and other winter activities. "
    },
    {
        id: "burke-mountain",
        name: "Burke Mountain",
        state: "VT",
        weekdayTicketPrice: 89,
        weekendTicketPrice: 45,
        averageRentalPrice: 59,
        summary: "Burke Mountain is a ski resort situated in the northeastern part of Vermont, USA. The resort offers over 270 acres of skiable terrain, including 50 trails and glades, and is famous for its challenging runs and tree skiing. The resort has a variety of terrain for skiers and snowboarders of all abilities. Burke Mountain is also home to a world-class ski racing academy and has hosted national and international competitions."
    },
    {
        id: "jay-peak",
        name: "Jay Peak",
        state: "VT",
        weekdayTicketPrice: 109,
        weekendTicketPrice: 99,
        averageRentalPrice: 65,
        summary: "Jay Peak is a ski resort located in the northern part of Vermont, USA. The resort is renowned for its extensive annual snowfall, averaging over 350 inches, and its challenging terrain, making it a popular destination for expert skiers and snowboarders. The resort offers over 2,000 acres of skiable terrain, including 78 trails and glades, and features the only aerial tram in Vermont."
    },
    {
        id: "mad-river-glen",
        name: "Mad River Glen",
        state: "VT",
        weekdayTicketPrice: 99,
        weekendTicketPrice: 99,
        averageRentalPrice: 55,
        summary: "Mad River Glen is a ski resort located in the Green Mountains of Vermont, USA. The resort is known for its challenging terrain, with over 50% of its trails designated as advanced or expert. It boasts over 2,000 vertical feet of skiing and is famous for its natural, ungroomed snow."
    },
    {
        id: "smuggs",
        name: "Smuggler' Notch",
        state: "VT",
        weekdayTicketPrice: 85,
        weekendTicketPrice: 85,
        averageRentalPrice: 59,
        summary: "Smuggler's Notch is a ski resort located in the Green Mountains of northern Vermont, USA. The resort is renowned for its family-friendly atmosphere, with programs and activities for all ages, including skiing, snowboarding, ice skating, snowshoeing, and dog sledding. Smuggler's Notch has over 1,000 acres of skiable terrain, including 78 trails and glades, and is known for its extensive beginner and intermediate terrain."
    },
    {
        id: "stratton",
        name: "Stratton",
        state: "VT",
        weekdayTicketPrice: 189,
        weekendTicketPrice: 167,
        averageRentalPrice: 70,
        summary: "Stratton Mountain is a ski resort located in the southern part of Vermont, USA. The resort offers over 600 acres of skiable terrain, including 99 trails and glades, and is known for its groomed trails and excellent snowmaking. Stratton Mountain is suitable for all levels of skiers and snowboarders, with a mix of beginner, intermediate, and expert terrain. The resort features a variety of accommodation options, including hotels, condos, and mountain cabins, as well as a range of dining options, from casual eateries to upscale restaurants."
    },
    {
        id: "sugarbush",
        name: "Sugarbush",
        state: "VT",
        weekdayTicketPrice: 189,
        weekendTicketPrice: 129,
        averageRentalPrice: 80,
        summary: "Sugarbush is a ski resort located in the heart of the Green Mountains of Vermont, USA. The resort offers over 4,000 acres of skiable terrain, including 111 trails and glades, and is known for its diverse terrain and excellent snow conditions. Sugarbush is suitable for all levels of skiers and snowboarders, with beginner, intermediate, and expert trails. The resort has a variety of accommodation options, including slope-side condos, hotels, and lodges, and features multiple dining options, ranging from casual eateries to fine dining."
    },
    {
        id: "cannon",
        name: "Cannon",
        state: "NH",
        weekdayTicketPrice: 94,
        weekendTicketPrice: 94,
        averageRentalPrice: 49,
        summary: "Cannon Mountain is a ski resort located in Franconia Notch State Park, New Hampshire, USA. The resort offers over 285 acres of skiable terrain, including 97 trails and glades, and is known for its challenging terrain, including the legendary expert-only trail, Mittersill. Cannon Mountain is suitable for all levels of skiers and snowboarders, with a mix of beginner, intermediate, and expert terrain."
    },
    {
        id: "cranmore-mountain",
        name: "Cranmore",
        state: "NH",
        weekdayTicketPrice: 99,
        weekendTicketPrice: 89,
        averageRentalPrice: 54,
        summary: "Cranmore Mountain Resort is a ski resort located in the White Mountains of North Conway, New Hampshire, USA. The resort offers over 170 acres of skiable terrain, including 57 trails and glades, and is known for its family-friendly atmosphere and varied terrain."
    },
    {
        id: "gunstock",
        name: "Gunstock",
        state: "NH",
        weekdayTicketPrice: 99,
        weekendTicketPrice: 87,
        averageRentalPrice: 49,
        summary: "Gunstock Mountain Resort is a ski resort located in the Belknap Mountains of Gilford, New Hampshire, USA. The resort offers over 220 acres of skiable terrain, including 55 trails and glades, and is known for its family-friendly atmosphere and stunning views of Lake Winnipesaukee."
    },
    {
        id: "king-pine",
        name: "King Pine",
        state: "NH",
        weekdayTicketPrice: 75,
        weekendTicketPrice: 50,
        averageRentalPrice: 42,
        summary: "King Pine Ski Area is a family-friendly ski resort located in Madison, New Hampshire, USA. The resort offers over 45 acres of skiable terrain, including 17 trails and glades, and is known for its affordable prices and intimate atmosphere. King Pine is suitable for all levels of skiers and snowboarders, with a mix of beginner, intermediate, and advanced terrain. "
    },
    {
        id: "loon",
        name: "Loon Mt.",
        state: "NH",
        weekdayTicketPrice: 110,
        weekendTicketPrice: 60,
        averageRentalPrice: 59,
        summary: "Loon Mountain Resort is a ski resort located in Lincoln, New Hampshire, USA. The resort offers over 370 acres of skiable terrain, including 61 trails and glades, and is known for its family-friendly atmosphere, terrain parks, and reliable snow conditions. Loon Mountain also offers other winter activities such as snowshoeing, ice skating, and cross-country skiing and provides a classic New England skiing experience, with breathtaking mountain views and a lively après-ski scene."
    },
    {
        id: "pats-peak",
        name: "Pats Peak",
        state: "NH",
        weekdayTicketPrice: 92,
        weekendTicketPrice: 69,
        averageRentalPrice: 44,
        summary: "Pats Peak Ski Area is a family-owned and operated ski resort located in Henniker, New Hampshire, USA. The resort offers over 28 acres of skiable terrain, including 28 trails and glades, and is known for its family-friendly atmosphere, affordable prices, and excellent snow conditions. Pats Peak is suitable for all levels of skiers and snowboarders, with a mix of beginner, intermediate, and advanced terrain. "
    },
    {
        id: "ragged-mountain",
        name: "Ragged Mt.",
        state: "NH",
        weekdayTicketPrice: 99,
        weekendTicketPrice: 89,
        averageRentalPrice: 49,
        summary: "Ragged Mountain Resort is a ski resort located in Danbury, New Hampshire, USA. The resort offers over 250 acres of skiable terrain, including 57 trails and glades, and is known for its varied terrain, reliable snow conditions, and family-friendly atmosphere. "
    },
    {
        id: "waterville",
        name: "Waterville Valley",
        state: "NH",
        weekdayTicketPrice: 98,
        weekendTicketPrice: 69,
        averageRentalPrice: 58,
        summary: "Waterville Valley Resort is a ski resort located in the White Mountain National Forest in New Hampshire, USA. The resort offers over 265 acres of skiable terrain, including 62 trails and glades, and is known for its varied terrain, reliable snow conditions, and family-friendly atmosphere."
    },
    {
        id: "saddleback",
        name: "Saddleback",
        state: "ME",
        weekdayTicketPrice: 75,
        weekendTicketPrice: 55,
        averageRentalPrice: 48,
        summary: "Saddleback Mountain Resort is a ski resort located in the beautiful Rangeley Lakes region of western Maine. The resort covers over 4,000 acres of land, with over 480 acres of skiable terrain, including 66 trails and glades. Saddleback is known for its wide variety of terrain, with runs suitable for all levels of skiers and snowboarders. The resort's highest point, Saddleback Mountain, reaches an elevation of 4,120 feet, offering breathtaking views of the surrounding wilderness."
    },
    {
        id: "sugarloaf",
        name: "Sugarloaf",
        state: "ME",
        weekdayTicketPrice: 122,
        weekendTicketPrice: 90,
        averageRentalPrice: 54,
        summary: "Sugarloaf Mountain Resort is a ski resort located in Carrabassett Valley, Maine, USA. The resort covers over 1,240 acres of land, with over 160 trails and glades, and is known for its long ski season and excellent snow conditions. Sugarloaf is the largest ski resort east of the Mississippi River, with a vertical drop of 2,820 feet and runs ranging from gentle beginner slopes to challenging expert terrain. The resort also offers a variety of other winter activities, including cross-country skiing, snowshoeing, and ice skating."
    },
    {
        id: "sunday-river",
        name: "Sunday River",
        state: "ME",
        weekdayTicketPrice: 130,
        weekendTicketPrice: 90,
        averageRentalPrice: 50,
        summary: "Sunday River Ski Resort is a ski resort located in Newry, Maine, USA. The resort covers over 870 acres of land, with over 135 trails and glades, and is known for its varied terrain and excellent snow conditions. Sunday River has a vertical drop of 2,340 feet and runs ranging from gentle beginner slopes to challenging expert terrain. The resort also offers a variety of other winter activities, including cross-country skiing, snowshoeing, and ice skating."
    },




export {}