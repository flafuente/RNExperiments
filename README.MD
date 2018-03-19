*** Redux in place
*** Define different views
* Code organization
* Stateless components vs pure components?
* Toasts advanced service
* Redux design after updating forms etc.
* Performance medium trick
* FlatList performance

-src
    -components //Reusable componentes across views
        -component1
            -index.js
            -styles.js
    -constants
        -endpoints.js
        -Colors.js
        -Config.js
    -redux
    -images
    -routes
        -AppNavigator
        -Navigator
    -screens
        -screen1
            -components //Only components used in the screen exclusively, handle actions
            -index.js // Container just handling props mapping exclusive components
    -middlewares
        - Analytics
        - Triggers // Actions such as BOOKING_SUCCESS trigger dispatch for booked members loading
        - Auth // Token management for api calls


