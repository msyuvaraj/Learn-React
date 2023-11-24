# episode2

-diff b/w caret^(for minor version upgrade) and tilde~(for major version upgrade)

-on npm init we get package.json file into our files.
    what is package.json?
        it is the file where configuration of npm is saved.nothing but a place where everything like name,version,dependencies its version ,git github url etc.. are listed out in an orderly fashion.

-on installing a package like npm install parcel a new file (package-lock.json) is added to the file.
    what is package-lock.json?
        it is similar to package.json just that it have the info abt the exact version of a dependency while develping.

    what is the hash in the integrity?
        it is used to verify both production code and code on local machine are same.coz sometimes code runs into a error in the production but works fine in the local.
    
    what is node_modules?
        on installing a package(here parcel) node_modules folder is also created ,which contains the actual code of parcel and other dependencies we install.
        package.json is the configuration of npm , more like what all contains in this repo

        why node modules is so huge?
            coz it contains all the dependencies required for parcel ,and those dependencies might require some other dependencies and this is called as TRANSITIVE DEPENDENCIES(A transitive dependency is one not imported directly into the project at hand, but instead imported by a direct dependency or another transitive dependency).

- do we need to push node_modules to github?
    no.coz its so huge we cant track each and every change.
    but our code depends on these node_modules then how.?
        thats why we are pushing package.json and package.lock.json into the github.
        it contains all the requirements so we can recreate all the dependencies wiht its exact version.
    put only the essentials in the git and ignore what can be regenerated on the server.

-npx command is for the execution of packages or dependencies

-using parcel we create a local server and it automatically refreshes the page for every changes saved.
    but how? = parcel supports something called HMR(Hot module replacement)
    parcel has some file watching alogorithm which is written in c++.
    for every save the server is built quickly in ms.this is using caching.
    parcel does many things like
        image optimazations , minification , bundling , compress all these things aids in making a page a faster.
    read parcel documentation to know much about what it does.

-parcel builds two code 
    1.dev code(this code is present in the dist folder).so parcel uses cache and dist folder to load the page faster.
    2.production code (here it compresses and optimises and does many thing to make the app fast)

-the node modoules in the local server and in the production server are not same.