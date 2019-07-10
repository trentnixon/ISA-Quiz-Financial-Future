import axios from 'axios';
import store from "../store/store";

export function FetchData(){

    /** Set Properties */
       
    /** Set Methods */ 
 
    this.start = ($ImgPath, GLABSJSON, AppType) => {

        // Set G-Docs Path
        this.Gsheet ='https://interactive.guim.co.uk/docsdata/'+GLABSJSON+'.json';

        // Create Json Array 
        this.init=[this.Gsheet]
        
        // Fetch Json Data for build and load into Reducers
        
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {
                // Store the returned Values to the Reducer

                //console.log(res);

                let AppData=[]
                // eslint-disable-next-line
                AppType.map((type,i)=>{
                        
                        AppData.push(res[0].data.sheets[type]);

                })

                store.dispatch({ type:"STORE_INTERACTIVE", payload:AppData});
                store.dispatch({ type:"STORE_HEADER", payload:res[0].data.sheets.Header[0]});
                store.dispatch({ type:"STORE_BODYCOPY", payload:res[0].data.sheets.BodyCopy});
                store.dispatch({ type:"STORE_PARTNERZONE", payload:res[0].data.sheets.PartnerZone[0]});
                store.dispatch({ type:"STORE_CLIENT", payload:res[0].data.sheets.Client[0]});

                // Set Image path
                store.dispatch({ type:"STORE_IMAGEPATH", payload:$ImgPath });
                // SET UI to True
                store.dispatch({ type:"UI_SET", payload:true });

            })
        )
        .catch(function (error) { 
                //console.log(error); 
            });
    }
}
