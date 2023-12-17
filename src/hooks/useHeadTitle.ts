import {useEffect} from "react";

type useHeadTitleProps = () => string

export const useHeadTitle = (callback: useHeadTitleProps) => {

    useEffect(() => {
           document.title = callback()
    }, [])
}