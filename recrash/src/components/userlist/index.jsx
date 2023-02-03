import React from "react";
import photo1 from "./photo1.webp";
import photo2 from "./photo2.webp";
import photo3 from "./photo3.webp";
import photo4 from "./photo4.webp";


const UserList = () => {
    const people = [
        {name: 'stellar', email: 'stelland@example.com', image: photo1},
        {name: 'John', email: 'john@example.com', image: photo2}, 
        {name: 'stellar', email: 'stelland@example.com', image: photo3},
        {name: 'John', email: 'john@example.com', image: photo4}, 
    ];
    
   return ( <ul class="p-6 divide-y divide-slate-200">
            { people.map( (person, i) => (
                    <li class="flex py-4 first:pt-0 last:pb-0" key={i}>
                        <img class="h-10 w-10 rounded-full" src={person.image} alt="" />
                        <div class="ml-3 overflow-hidden">
                            <p class="text-sm font-medium text-slate-900">{person.name}</p>
                            <p class="text-sm text-slate-500 truncate">{person.email}</p>
                        </div>
                    </li>
            ))
            }
        </ul>)
}

export const UserList2 = () => {
    const people = [
        {name: 'stellar', email: 'stelland@example.com', title: 'lorem ipsum dolor sit amet'},
        {name: 'John', email: 'john@example.com', title: 'lorem ipsum dolor sit amet'}, 
        {name: 'stellar', email: 'stelland@example.com', title: 'lorem ipsum dolor sit amet'},
        {name: 'John', email: 'john@example.com', title: 'lorem ipsum dolor sit amet'}, 
    ];

    return (
        <table>
            <tbody>
                {
                    people.map((person) => (
                        <tr class="odd:bg-white even:bg-slate-50">
                            <td>{person.name}</td>
                            <td>{person.title}</td>
                            <td>{person.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default UserList;
