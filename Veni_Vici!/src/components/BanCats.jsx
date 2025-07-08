//this component bans displaying cats when an attribute is clicked on

const BanCats =({banCatInfo, setBanCatInfo})=>{
    const addToBanList=(type, value)=>{
        if(!value){
            return;
        }

        setBanCatInfo(prev=>({
            ...prev, [type]:[new Set([...prev[type],value])]
        }));
    };

    const removeFromBan= (type,value)=>{
        setBanCatInfo(prev=>({
            ...prev, [type]: prev[type].filter(item=> item!=value)
        }));
    };

    return(
        <>
        <div className="ban-info">
            <h3>Ban Attribute List</h3>
            <div>
                <strong>Banned Life Span: </strong>
                    {banCatInfo.life_span.lenght>0?(
                        <ul>
                        {banCatInfo.life_span.map((life_span,index)=>
                            <li key={index}>
                            <button onClick={()=>removeFromBan("life_span", life_span)}>{life_span}</button>
                            </li>
                        )}
                        </ul>
                ) : (
                    <p>No breeds banned</p>
                )}
            </div>

            

        </div>
        
        </>
    )

}

export default BanCats;