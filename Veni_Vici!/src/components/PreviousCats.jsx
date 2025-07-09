// displays pervious cats seen
const PreviousCats = ({catInfo}) => {

  return (
    <div>
        <h2> Previous cats seen!</h2>
        <div className="image-container">
          {/* show previous cats if available, else display message */}
            {catInfo && catInfo.length > 0 ? (
              // allow most recent cat to show up first
                catInfo.slice().reverse().map((catInfo, index) => (
                   <li className="gallery" key={index}>
                        <img
                            className="gallery-screenshot"
                            src={catInfo.image}
                            alt="Previous cat"
                            width="500"
                        />                    
                            <div className="info">
                            <p><strong>Life Span:</strong> {catInfo.life_span}</p>
                            <p><strong>Origin:</strong> {catInfo.origin}</p>
                            <p><strong>Weight:</strong> {catInfo.weight}</p>
                            </div>
                        
            </li>
          ))
            ):(
            <div>
                <h3>You haven't seed any cats yet!</h3>
            </div>
            )}
        </div>
      
    </div>
  );
};

export default PreviousCats;