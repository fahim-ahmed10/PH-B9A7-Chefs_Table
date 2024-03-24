import bolognesePic from '../assets/Bolognese.png';
import clockIcon from '../assets/icons8-clock-32.png';
import fireIcon from '../assets/icons8-fire-50.png';
const Cooking = () => {
    return (
        <div className='container mx-auto mt-5 px-2 flex md:gap-5 lg:gap-10'>
            <div className="md:w-[50%] lg:w-[65%] grid md:grid-cols-1 lg:grid-cols-2 md:gap-10 lg:gap-3">
                <div className='w-[379px] border p-6 rounded-2xl'>
                    <div>
                        <img src={bolognesePic} alt="bolognese" />
                    </div>
                    <div className='mt-5 mb-5 space-y-2'>
                        <h1 className='text-xl font-bold mb-3'>Spaghetti Bolognese</h1>
                        <p className='text-base text-[#808080]'>Classic Italian pasta dish with savory meat sauce.</p>
                    </div>
                    <hr />
                    <div className='mt-5 mb-5'>
                        <h1 className='text-lg font-bold pb-4'>Ingredients: 6</h1>
                        <ul className='list-disc text-[#808080] pl-7 space-y-2'>
                            <li>500g gorund beef</li>
                            <li>1 onion, chopped</li>
                            <li>2 cloves garlic, minced</li>
                        </ul>
                    </div>
                    <hr />
                    <div className='flex gap-2 items-center mt-5 text-[#686868] mb-5'>
                        <img className='h-5' src={clockIcon} alt="clock" />
                        <h4 className='pr-5'>30 minutes</h4>
                        <img className='h-5' src={fireIcon} alt="fire" />
                        <h4>600 calories</h4>
                    </div>
                    <button className='text-xl font-bold bg-[#0be58a] px-5 py-3 rounded-3xl'>Want to Cook</button>
                </div>
                <div className='w-[379px] border p-6 rounded-2xl'>
                    <div>
                        <img src={bolognesePic} alt="bolognese" />
                    </div>
                    <div className='mt-5 mb-5 space-y-2'>
                        <h1 className='text-xl font-bold mb-3'>Spaghetti Bolognese</h1>
                        <p className='text-base text-[#808080]'>Classic Italian pasta dish with savory meat sauce.</p>
                    </div>
                    <hr />
                    <div className='mt-5 mb-5'>
                        <h1 className='text-lg font-bold pb-4'>Ingredients: 6</h1>
                        <ul className='list-disc text-[#808080] pl-7 space-y-2'>
                            <li>500g gorund beef</li>
                            <li>1 onion, chopped</li>
                            <li>2 cloves garlic, minced</li>
                        </ul>
                    </div>
                    <hr />
                    <div className='flex gap-2 items-center mt-5 text-[#686868] mb-5'>
                        <img className='h-5' src={clockIcon} alt="clock" />
                        <h4 className='pr-5'>30 minutes</h4>
                        <img className='h-5' src={fireIcon} alt="fire" />
                        <h4>600 calories</h4>
                    </div>
                    <button className='text-xl font-bold bg-[#0be58a] px-5 py-3 rounded-3xl'>Want to Cook</button>
                </div>
            </div>
            <div className="md:w-[45%] lg:w-[35%]">
                <div className='w-full border rounded-2xl'>
                    <h1 className='text-center font-bold '>Want to cook: 01</h1>
                    <hr className='mt-3 w-[70%] mx-auto' />
                    <div>
                        <table className='mt-3'>
                            <tr>
                                <td></td>
                                <td className='pb-4 pl-3 md:pr-10 lg:pr-20 w-32 text-start'>Name</td>
                                <td className='pb-4 w-20 text-start'>Time</td>
                                <td className='pb-4 w-20 text-start'>Calories</td>
                                <td></td>
                            </tr>
                            <tr className='bg-[#f9f9f9] text-sm'>
                                <td className='pl-3'>1</td>
                                <td className='pl-3 pr-4'>Chicken Caesar Salad</td>
                                <td className='pr-4'>20 Minutes</td>
                                <td>400 calories</td>
                                <td className='w-full text-end'><button className='bg-[#0be58a] hover:bg-[#6bffc1] py-1 px-3 text-sm font-bold rounded-3xl'>Preparing</button></td>
                            </tr>
                        </table>
                    </div>
                    <h1 className='text-center font-bold '>Currently cooking: 02</h1>
                    <hr className='mt-3 w-[70%] mx-auto' />
                    <div>
                        <table className='mt-3'>
                            <tr>
                                <td></td>
                                <td className='pb-4 pl-3 md:pr-20 lg:pr-28 w-32 text-start'>Name</td>
                                <td className='pb-4 md:pr-10 lg:pr-20 w-20 text-start'>Time</td>
                                <td className='pb-4 w-full text-start'>Calories</td>
                            </tr>
                            <tr className='bg-[#f9f9f9] text-sm'>
                                <td className='pl-3'>1</td>
                                <td className='pl-3 pr-4'>Chicken Caesar Salad</td>
                                <td className='pr-4'>20 Minutes</td>
                                <td className='pr-4'>400 calories</td>
                            </tr>
                            <tr className='bg-[#f9f9f9] text-sm'>
                                <td className='pl-3 pt-4'>1</td>
                                <td className='pl-3 pr-4 pt-4'>Chicken Caesar Salad</td>
                                <td className='pr-4 pt-4'>20 Minutes</td>
                                <td className='pr-4 pt-4'>400 calories</td>
                            </tr>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Cooking;