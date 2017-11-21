import React, {Component} from 'react';
import AutoSuggestSearchBar from './autoSuggestSearchBar';
import SearchButtonComponent from './searchButton';

export default class SearchBar extends Component {

    componentDidMount() {
/*         var self =this;
        document.getElementById("formRicerca").onsubmit = function () { */
            /* do what you want with the form */
/* 
            var valore = document.getElementById("cerca").value;
            if(valore.length<3){
                self.controlloFallito();
                return false;
            }//end if
            else{
                self.controlloPassato();
                return true;
            }//end else */
/*         }//get element by id formRicerca */

    }//end component did mount

/*     controlloPassato(){
        alert("ricerca eseguita correttamente");
    }

    controlloFallito(){
        alert('Inserire almeno 3 caratteri');
    } */

    render() {
        return (

            <div>

                {/* <form method="post" action="/ricerca" onSubmit="controlloForm()" id="formRicerca" className="form-SearchBar">  */}
                    <AutoSuggestSearchBar/>
                    <SearchButtonComponent/>
                {/*  </form>   */}

            </div>

        );
    }

}
