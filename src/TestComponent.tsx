import { User } from './models/userModel'


function TestComponent (){

    // const ime : string = "Srdjan";



    // function imeKorisnika(user : {ime: string, prezime: string}) : string{

    //     return user.ime;

    // }

      function imeKorisnika(user : User) : string{

        return user.ime;

    }


    return(
        <div>
            <h1>Zdravo, {imeKorisnika({ime: "Pera", prezime: "Peric"})}</h1>
        </div>
    )

}

export default TestComponent;