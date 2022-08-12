// style the catchphrase element in such a way it spans to the whole length and has back background with text center...- very easy
import '../components/Catchphrase.css';

function Catchphrase() {
    const label = {
        ele1: 'Shop in style',
        ele2: 'with this shop homepage template',
    };

    return (
        <div className="text-white">    
                <h1>{label.ele1}</h1>
                <div className='text-secondary'>    
                    <p className='textsmall'>{label.ele2}</p>
                </div>
        </div>
    );
};

export default Catchphrase;