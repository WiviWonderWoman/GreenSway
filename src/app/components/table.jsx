import React from "react";

export default class Table extends React.Component {

    // TODO: conditinal if clicked - pass the source to Table
    render() {
        return(
            <div> 
                <table>
                    <thead>
                        <tr>
                            <th>datum</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                           <td>0000-00-00</td>
                       </tr>
                       <tr>
                           <td>0000-00-00</td>  
                        </tr>
                       <tr>
                           <td>0000-00-00</td>
                       </tr>
                       <tr>
                           <td>0000-00-00</td>
                       </tr>
                   </tbody>
               </table>
            </div>
        )
    }
}