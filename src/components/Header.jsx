
const Header = () => {
    return (
        <header className={'mx-auto py-10 max-w-[1140px]'}>
                <h3>오늘은 🧑‍💻</h3>
                <h1 className={'text-sky-600 text-3xl'}>{new Date().toDateString()}</h1>
        </header>
    )
}
export default Header