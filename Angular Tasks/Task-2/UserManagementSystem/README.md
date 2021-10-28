# Task-2

## User Management System

1. Create an angular application with Routing </br>
2. Create a service called users service</br>
3. Service should be used across modules to get data</br>
4. Use static data in service (no api data required)</br>
5. Create 3 new modules other than app module</br>
6. Name the modules as ‘Active’, ‘Deleted’, ‘Manage’</br>
7. Lazy load ‘Manage’ module though Routing</br>
8. Separate Routing module from app module </br>
9. Create 3 components</br>
   1. User </br>
      - Should show user first name and last name
      - Should show with a red border if user is deleted
      - Should show with a green border if user is active
      - Should show Activate button if shown in Deleted feature
      - Should show Deactivate button if shown in Active feature
      - Should show Details button if shown in Manage feature
   2. UsersList</br>
      - Should show list of users using above component
   3. UserDetails
      - Show all the details of a user
10. Use Routing to navigate among modules</br>
11. Use nested routing in ‘Manage’ module to see UserDetails component on username click</br>
12. Handle Template errors for undefined objects</br></br>
    User Model #</br>
    interface User {</br>
    id: string;</br>
    firstName: string;</br>
    lastName: string;</br>
    age: number;</br>
    login: string;</br>
    password: string;</br>
    isDeleted: boolean;</br>
    }
