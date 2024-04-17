import React, { useCallback, useState } from 'react'
import Light from './Light';

function SmartHome2(props) {
    const [masterOn, setMasterOn] = useState(false);
    const [kitchenOn, setKitchenOn] = useState(false);
    const [bathOn, setBathOn] = useState(false);

    const toggleMaster = useCallback(()=> setMasterOn(!masterOn), [masterOn]); // [masterOn] 가 변할때만 사용할거다.
    const toggleKitchen = useCallback(()=> setKitchenOn(!kitchenOn),[kitchenOn]);
    const toggleBath = useCallback(()=> setBathOn(!bathOn), [bathOn]);
    
    return(
        /* 빈태그로 감싸도 된다. */
        <>
            <Light room="침실" on={masterOn} toggle={toggleMaster} />
            <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
            <Light room="욕실" on={bathOn} toggle={toggleBath} />
        </>
    )
}

export default SmartHome2;

