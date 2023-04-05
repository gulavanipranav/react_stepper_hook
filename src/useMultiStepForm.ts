import { ReactElement, useState } from "react";

export function useMultiStepForm(steps:ReactElement[]){
    const [currentStepIndex ,setCurrentStepIndex] = useState(0)

    function next(){
        setCurrentStepIndex(currentIndex =>{
            if(currentIndex >= steps.length -1) return currentIndex
            return currentIndex + 1
        })
    }

    function back(){
        setCurrentStepIndex(currentIndex =>{
            if(currentIndex <= 0) return currentIndex
            return currentIndex - 1
        })
    }

    function goto(index:number){
        setCurrentStepIndex(index)
    }

    return{
        currentStepIndex,
        step:steps[currentStepIndex],
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length -1 ,
        goto,
        next,
        back,
        steps
    }

}