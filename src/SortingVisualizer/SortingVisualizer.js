import React, { useEffect, useState } from 'react';
import './SortingVisualizer.css';

export default function SortingVisualizer(){
    const [array, setArray] =  useState([]);
    const [arraySize,setArraySize] = useState(100); //The user will eventually be able change the array size

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HELPERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    /**********resetArray**********
        @description
            gives the visualized array new values
        @params
            none
        @return
            none
    */
   function resetArray(){
       const newArray = [];
       //populate the new away array
       for(let i = 0; i < arraySize; i++){
           newArray.push(randomIntFromInterval(10,500));
       }
       setArray(newArray);
   }
    /**********randomIntFromInterval**********
    @description

    @params
        min - integer value that represents the minimum value
        max - integer value that represents the maximum value
    @return 
        random integer in between min and max
    */ 
    function randomIntFromInterval(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /* */
    function createArrayValueBars(){
        return array.map((value, index) => (
            <div className="array-bar"
                key={index}
                style={{height: `${value}px`}}>
            </div>
        ));
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ HANDLERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    function mergeSort(){

    }
    
    useEffect(()=>{
        resetArray();
    },[]); // Replace compnenetDidMount. We want the array to reset when the page 


    //Render
    return (
        <div className="canvas">
            <div className="array-container">
            {createArrayValueBars()}
            </div>  
            <button onClick={resetArray}>Generate new array</button>
        </div>
        
        
    );

 
     

    

    
}