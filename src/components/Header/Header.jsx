import profilePhoto from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center my-4 py-4 border-b-2'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={profilePhoto} alt="" />
        </header>
    );
};

export default Header;