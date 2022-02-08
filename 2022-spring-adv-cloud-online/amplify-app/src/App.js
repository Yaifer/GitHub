import React from 'react'
import { withAuthenticator, 
  AmplifySignOut 
} from '@aws-amplify/ui-react/legacy'

const App = () => {
  return (
    <div>
      <h1>Chill Chest 1.0</h1>
      <AmplifySignOut />
      <h2>
        This is just the begining!!!
      </h2>
      <fieldset>
      <table>
        <tr>
          <td>
            Hello
          </td>
          <td>
            This is a test table
          </td>
        </tr>
        <tr>
          <td>
            Not sure
          </td>
          <td>
            what will happen  
          </td>      
        </tr>

      </table>
      </fieldset>
      
    </div>
  );
};

export default withAuthenticator(App);