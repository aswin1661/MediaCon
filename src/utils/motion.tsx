

export default function SlideInFromLeft(delay:number) {
    return{
        hidden:{x:-100, opacity:0},
        visible:{
            x:0,
            opacity:1,
            Transition:{
                delay:delay,
                duration:0.5,
            }
        }
    }
}