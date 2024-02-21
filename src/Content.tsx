// C6

const Content = () => {
    const handleNameChange = () => {
        const names = ['A', 'B', 'C'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    };

    const handleClick = () => {
        console.log('1')
    }

    const handleClick2 = (name : string) => {
        console.log(`props : ${name}`)
    }

    const handleClick3 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => {handleClick2('apple')}}>Click</button>
            <button onClick={(e) => {handleClick3(e)}}>Click</button>
        </main>
    );
};

export default Content;