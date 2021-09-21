import { Image, Icons } from 'components'
import planSvg from "assets/icons/plan.svg"
import exerciseSvg from "assets/icons/exercise.svg"
import shoeSvg from "assets/icons/shoe.svg"
import dietSvg from "assets/icons/diet.svg"
import whistleSvg from "assets/icons/whistle.svg"
import watchSvg from "assets/icons/smartwatch.svg"
import bookSvg from "assets/icons/bookcheck.svg"

let data = {
    testimonials: [
        {
            name: "Emily",
            age: "28",
            city: "Delaware, NJ",
            rating: 5,
            image: "testimonialImgOne",
            description: "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."
        },
        {
            name: "Kylie",
            age: "40",
            city: "Los Angeles",
            rating: 5,
            image: "testimonialImgTwo",
            description: "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress."
        },
        {
            name: "Jesica",
            age: "51",
            city: "San Francisco, CA",
            rating: 5,
            image: "testimonialImgThree",
            description: "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.\n"
        }
    ],
    faq: [
        {
            question: "What happens after I order?",
            answer: "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve."
        },
        {
            question: "Where can I acces my plan?",
            answer: "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase."
        },
        {
            question: "How do I cancel my subscribtion?",
            answer: "You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app"
        },
        {
            question: "Why this program is paid?",
            answer: "We are aiming to offer our clients the best experience, which comes with a lot of work. The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback!"
        },
    ],
    plans: [
        {
            discount: "Save 50%",
            plan: "6 months plan",
            price: "$9.99",
            underlined: "$119.94",
            bold: " $59.94",
            plain: "billed every 6 months"
        },
        {
            plan: "3 months plan",
            price: "$14.99",
            underlined: "$59.97",
            bold: " $44.97",
            plain: "billed every 3 months"
        },
        {
            plan: "1 month plan",
            price: "$19.99",
            underlined: "",
            bold: " $19.99",
            plain: "billed every month"
        }
    ],
    programInfo: [
        {
            title: "A personalized yoga program",
            description: "Completely safe and focused on your key goals",
            image: planSvg
        },
        {
            title: "Easy & enjoyable yoga workouts for your level",
            description: "The program adjusts to your level and pace",
            image: Icons[1]
        },
        {
            title: "No special preparation needed",
            description: "Perfect for beginners! Requires no special preparation or equipment",
            image: Icons[2]
        },
        {
            title: "Daily motivation & accountability",
            description: "Track your progress, develop a healthy routine, reach goals faster",
            image: Icons[3]
        },
        {
            title: "Browse from various yoga challenges",
            description: "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
            image: Icons[4]
        },
        {
            title: "Easy access on any device",
            description: "Do your yoga anywhere across all types of devices",
            image: Icons[5]
        },
        {
            title: "A complete guide to get started",
            description: "Best tips, guidelines, advice, and recommendations for successful practice",
            image: Icons[6]
        }
    ],
    whyYoga: [
      "Each program adapts to your age or fitness level",
        "Mindful way to exercise and get real results",
        "Effective and long-term lasting results",
        "Suited activities that benefit both the mind and body",
        "Low-intensity but highly-effective workouts",
        "Extra attention to muscle, joint and back health"
    ]
}

export default data;