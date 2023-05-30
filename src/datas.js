let xAxisData = [
    {
        'name': 'Jan',
        'Sale': 112_000
    },
    {
        'name': 'Feb',
        'Sale': 99_000
    },
    {
        'name': 'Mar',
        'Sale': 12_090
    },
    {
        'name': 'Apr',
        'Sale': 99_000
    },
    {
        'name': 'May',
        'Sale': 54_000
    },
    {
        'name': 'Jun',
        'Sale': 85_000
    },
    {
        'name': 'Jul',
        'Sale': 34_000
    },
    {
        'name': 'Agu',
        'Sale': 18_598
    },
    {
        'name': 'Sep',
        'Sale': 0
    },
    {
        'name': 'Oct',
        'Sale': 73_078
    },
    {
        'name': 'Nov',
        'Sale': 12_900
    },
    {
        'name': 'Dev',
        'Sale': 97_000
    },
]



const newMembers = [
    {
        id: 1,
        username: 'Sara',
        title: 'Web Developer',
        img: 'images/pic24.jpg'
    },
    {
        id: 2,
        username: 'Pitter',
        title: 'Seo Eng',
        img: 'images/pic13.jpg'
    },
    {
        id: 3,
        username: 'Mary',
        title: 'Weblog',
        img: 'images/pic12.jpg'
    },
    {
        id: 4,
        username: 'Jan',
        title: 'Hacker',
        img: 'images/pic58.jpg'
    },
]


const transactions = [
    {
        id: 1, 
        customer: 'Mary',
        date: '2 May 2022',
        amount: 125,
        status: 'Approved',
        img: 'images/pic12.jpg'
    },
    {
        id: 2, 
        customer: 'Jan',
        date: '10 feb 2022',
        amount: 163,
        status: 'Declined',
        img: 'images/pic58.jpg'
    },
    {
        id: 3, 
        customer: 'Sara',
        date: '15 Jun 2022',
        amount: 100,
        status: 'Pending',
        img: 'images/pic24.jpg'
    },
    {
        id: 4, 
        customer: 'Pitter',
        date: '13 Agu 20200',
        amount: 120,
        status: 'Approved',
        img: 'images/pic13.jpg'
    },
]


let userRows = [
    {
        id: 1, 
        username: 'Sara',
        avatar: 'images/pic24.jpg',
        status: 'active',
        transaction: '$125.25',
        email: 'sara@gmail.com'
    },
    {
        id: 2, 
        username: 'Pitter',
        avatar: 'images/pic13.jpg',
        status: 'none-active',
        transaction: '$100.25',
        email: 'pitter@gmail.com'
    },
    {
        id: 3, 
        username: 'Mary',
        avatar: 'images/pic12.jpg',
        status: 'active',
        transaction: '$15.25',
        email: 'mary@gmail.com'
    },
    {
        id: 4, 
        username: 'Jan',
        avatar: 'images/pic58.jpg',
        status: 'none-active',
        transaction: '$123.25',
        email: 'jan@gmail.com'
    },
    {
        id: 5, 
        username: 'Jimin',
        avatar: 'images/profile.jfif',
        status: 'active',
        transaction: '$14.25',
        email: 'jimin@gmail.com'
    },
]


let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/asus.jpeg',
        price: 125
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/acer.jpg',
        price: 155
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/hp.jpg',
        price: 230
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/dell.jpg',
        price: 125
    }

]


const productsData = [
    {
        name: 'Jun',
        sales: 4000
    },
    {
        name: 'Feb',
        sales: 3000
    },
    {
        name: 'Mar',
        sales: 5000
    },
]


export {xAxisData, newMembers, transactions, userRows, products, productsData}