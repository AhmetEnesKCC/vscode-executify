# Change Log

## **0.0.9**

### Bug Fixes

-   Fixed icons not loading issue

## **0.0.8**

### Changes

-   Optional inputs
    -   if you use `-o>` (side by side ( - ), ( o ) it is the letter "o", ( > ) ) instead of `->` the command will execute even you pass the input box. ( It will start ask from non optional inputs then optional ones.)
    -   Otherwise it will cancel all process.
-   If you cancel input box it will jump to the next if exist
-   Changed icons
-   Icons will change related to theme type

### Bug Fixes

-   Optimized code quality
-   Fixed input window opening even there is no input in command bug.

## **0.0.7**

### Changes

-   Added Inputs
    -   To use it write: `->` (side by side line ( - ) and greater sign ( > ))
    -   You can use more than one

### Bug Fixes

-   Optimized code quality

## **0.0.6**

### Changes

-   Added two new **shortcut**
    -   $fp : file path
    -   $fps : file path inside quotes
-   You can add your path destinations to shortcuts:

    ### Before

    ```sh
    command $fn$fnw // Not works, output => command $fn$fnw
    ```

    ### After

    ```sh
    command $fn$fnw // Works, output => command [fileName][fileNameWithout Extension]
    ```

### Bug Fixes

-   Variables not working inside of quote.
-   Side by side variables not working issue.
-   Optimized code quality

## **0.0.5**

### Changes

-   Changed **names** of terminals
    -   They named as : **line - [line-number]**. For example if you run first line its name will be : line - 1
-   Optimised code quality

### Bug Fixes

-   Fixed create only one terminal bug
-   You can re-run commands even if the process is not finished

## **0.0.4**

-   Added abbreviations
    -   $fn : File Name With Extension
    -   $fnw : File Name Without Extension
    -   $fon : Folder Name
-   Fixed minor bugs
-   Optimised

## **0.0.3**

-   Added **commands** to README.md

-   Fixed some lines in readme file

## **0.0.2**

-   Added **usage** to README.md

## **0.0.1**

-   Deployed VS Code Marketplace

-   Tested for all scenarious
