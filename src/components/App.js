import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
class App extends React.Component{

    async fetchData(){
        const response = await fetch('https://storage.googleapis.com/osbuddy-exchange/summary.json');
        const items= await response.json();
        console.log(items);
        
    }

    render() {
        this.fetchData();
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
        
    } 
}

export default App;