import React, {Component} from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';



var sugg = [];
var valSuggestCliccato=false;
  
  function getSuggestions(value) {
    /* console.log("prendo tutti i valori delle suggestions") */
    /* const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length; */
      return sugg;
  }

  
  function getSuggestionValue(suggestion) {
    /* console.log("prendo un valore della suggestion") */
    valSuggestCliccato=true;
    return suggestion.name;
  } 
  
  function renderSuggestion(suggestion) { 
    /* console.log("renderizzo una suggestion"); */

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
        valueSearched:""
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

    componentDidMount() {
      /* console.log("component montato") */
      var v=sessionStorage.getItem('valueInput');
      if(sessionStorage.getItem('valueInput'))
      {
      this.setState({value:v});
      sessionStorage.removeItem('valueInput');
    }

    }
    
    AjaxRequest(input) {
            /* console.log("inizio metodo chiamata ajax") */

                var URL = "http://52.142.209.88/tagsservice/suggestions/" + input;
                var self = this;

                sessionStorage.setItem('valueInput', input);
        
                axios.get(URL,{
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    crossdomain: true,
                  }
                }).then(function (response) {
                        /* console.log("length:"+response.data.results.length); */
                        /* console.log("eseguo chiamata ajax") */
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
/*                              console.log("sugg:");
                                console.log(sugg); */
                            
                        }//end for

                        //Serve per ri-renderizzare la lista dei suggerimenti
                        
                          if(valSuggestCliccato==true)
                          {
                              valSuggestCliccato=false;
                          }//end if
                          else{
                            self.onSuggestionsFetchRequested({input});
                          }//end else
                         
                        

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    /* console.log("fine metodo della chiamata ajax") */
                    
            }


    

    onChange = (event, { newValue, method }) => {
     
      /* console.log("!!!---è schioccato l'evento del onChange") */
      this.setState({value: newValue});
      if(newValue.length<3){
        sugg=[];
      }//end if
      else  this.AjaxRequest(newValue);
    };

    onSuggestionsFetchRequested = ({ value }) => {
      /* console.log("fetcho la richiesta onSuggestionsFetchRequested") */
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      /* console.log("pulisco l'array: suggestions") */
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Cerca",
        value,
        onChange: this.onChange,
        name:"cerca",
        id:"cerca",
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
        /* Use your imagination to define how suggestions are rendered. */
          inputProps={inputProps}
        /* Pass through arbitrary props to the input. It must contain at least value and onChange. */
          highlightFirstSuggestion={true}
         /* Autosuggest to automatically highlight the first suggestion. */ 
          alwaysRenderSuggestions={false}
          /* Implement it to teach Autosuggest what should be the input value when suggestion is clicked. */
          renderSuggestion={renderSuggestion}
         />
      );
      
    }
  }


// WEBPACK FOOTER //
// src/components/searchBar.component/autoSuggestSearchBar.js