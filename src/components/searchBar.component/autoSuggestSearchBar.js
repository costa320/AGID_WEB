import React, {Component} from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';


var sugg = [];
  
  function shouldRenderSuggestions(value) {
    
    return value.trim().length >= 3;
  }
  
  function getSuggestions(value) {

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    /* return inputLength === 0 ? [] : sugg.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue); */
      return sugg;
  }

  
  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }
  
  function renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }
  
  export default class AutoSuggestSearchBar extends Component {

    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: [],
        ajaxResponse:[],
        formattedArray:[],
        formattedArrayOfObjects:[],
      };    
    }



    nullFormattedArray(){
        this.setState({formattedArray:[]});
    }

    nullAjaxresponce(){
        this.setState({ajaxResponse:[]});
    }

    nullFormattedArrayOfObjects(){
        this.setState({formattedArrayOfObjects:[]});
    }

    nullSuggestion(){
      this.setState({suggestions:[]});
    }


  
    AjaxRequest(input) {
        
                var URL = "http://10.100.203.99:5000/suggestions/" + input;
                var self = this;
        
                axios.get(URL,{
                  
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    crossdomain: true,
                  }
                }).then(function (response) {
                        /* console.log("length:"+response.data.results.length); */
                        self.setState({ajaxResponse: response.data});
                        console.log("response: ");
                        console.log(response.data);

                        self.nullFormattedArray();
                        self.nullFormattedArrayOfObjects();
                        if(input.length<3) self.onSuggestionsClearRequested();
                        sugg=[];

                        for (var a = 0; a < self.state.ajaxResponse.length; a++) {
                            self.state.formattedArray.push(self.state.ajaxResponse[a].tag);
                            /* Creo un oggetto nel quale vado a mettere tutti i dati di un certo indirizzo
                            che poi questo oggetto dovrà essere pushato in un array di oggetti */
                            var appoggio= {name:self.state.formattedArray[a]}
                          
                            /* Pusho l'oggetto d'appoggio nell'array formattedArrayOfObjects */

                            sugg.push(appoggio);
/*                             console.log("sugg:");
                            console.log(sugg); */
                        }//end for
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    
            }

    onChange = (event, { newValue, method }) => {
      this.setState({value: newValue});
      if(newValue.length<3){
        sugg=[];
      }//end if
      else  this.AjaxRequest(newValue);
    };

    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Cerca",
        value,
        onChange: this.onChange
      };
      return (

        <Autosuggest 
          suggestions={suggestions}
        /* These are the suggestions that will be displayed. Items can take an arbitrary shape. */
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        /* Will be called every time you need to recalculate suggestions. */
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        /* Will be called every time you need to set suggestions to []. */
          getSuggestionValue={getSuggestionValue}
        /* Implement it to teach Autosuggest what should be the input value when suggestion is clicked. */
          renderSuggestion={renderSuggestion}
        /* Use your imagination to define how suggestions are rendered. */
          shouldRenderSuggestions={shouldRenderSuggestions}
        /* Use it, for example, if you want to display suggestions when input value is at least 2 characters long.*/
          inputProps={inputProps}
        /* Pass through arbitrary props to the input. It must contain at least value and onChange. */
          highlightFirstSuggestion={true}
         /* Autosuggest to automatically highlight the first suggestion. */ 
         alwaysRenderSuggestions={true}
         />
        
         
      
      );
      
    }
  }