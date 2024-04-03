import './App.css';
import Button from "producer/button";
import Card from "producer/card";

const App = () => {
    return (
        <div className="content">
            <h1>Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <Button/>
            <Card>
                <h1>Header of Card</h1>
                <p>Content of Card</p>
            </Card>
        </div>
    );
};

export default App;
