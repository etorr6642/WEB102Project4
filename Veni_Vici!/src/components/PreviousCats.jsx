const PreviousCats = ({ images }) => {

  return (
    <div>
        <h2> Previous cats seen!</h2>
        <div className="image-container">
            {images && images.length > 0 ? (
                images.map((pic, index) => (
                    <li className="gallery" key={index}>
                        <img
                        className="gallery-screenshot"
                        src={pic}
                        alt="Undefined screenshot from query"
                        width="500"
                        />
                    </li>
                )
            )
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