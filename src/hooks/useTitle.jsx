import { useEffect } from 'react';
const useTitle = title => {
    useEffect(() => {
        document.title = `DisneyDolls | ${title}`;
    },[title])
}

export default useTitle;