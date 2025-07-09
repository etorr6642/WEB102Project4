//this component bans displaying cats when an attribute is clicked on


const BanCats =({banList, setBanList})=>{
   
    //removes value from ban list by type
    const removeFromBan= (type,value)=>{
        setBanList(prev=>({
            ...prev, [type]: prev[type].filter(item=> item!=value)
        }));
    };

    

    return(
        <>
        <div className="ban-info">
            <h3>Ban Attribute List</h3>
      

            {/* maps values by type */}
            {["origin", "life_span", "weight"].map((type)=>(
                <div key={type}>
                    {/* displays types with correct grammar (life_span -> Life Span) */}
                    <h3>{type.replace('_',' ').replace(/^\w/, c=>c.toUpperCase())}</h3>
                    {/* Displays all bans if exist */}
                    {banList[type] && banList[type].length>0?(
                        <ul className ='ban-gallery'>
                            {/* for each type, display the ban and a button to remove it */}
                            {banList[type].map((value,index)=>(
                                <li key={index}>
                                    <span className='ban-item'>{value}</span>
                                    {/* button to remove ban from banList */}
                                    <button onClick={()=>removeFromBan(type, value)} className = 'unban-button'>Remove</button>
                                </li>
                            ))}
                        </ul>
                        ):(
                            <p>no banned {type}</p>
                        )}
                    </div>
                    

            ))}

            

        </div>
        
        </>
    );
};

export default BanCats;