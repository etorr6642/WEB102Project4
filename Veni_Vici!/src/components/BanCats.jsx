//this component bans displaying cats when an attribute is clicked on
import { useState, useEffect } from 'react'

const BanCats =({banList, setBanList})=>{
   
    const removeFromBan= (type,value)=>{
        setBanList(prev=>({
            ...prev, [type]: prev[type].filter(item=> item!=value)
        }));
    };

    

    return(
        <>
        <div className="ban-info">
            <h3>Ban Attribute List</h3>
      

            {["origin", "life_span", "weight"].map((type)=>(
                <div key={type}>
                    <h3>{type.replace('_',' ').replace(/^\w/, c=>c.toUpperCase())}</h3>
                    {banList[type] && banList[type].length>0?(
                        <ul className ='ban-gallery'>
                            {banList[type].map((value,index)=>(
                                <li key={index}>
                                    <span className='ban-item'>{value}</span>
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