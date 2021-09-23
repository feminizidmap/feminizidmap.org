# Running the website locally on MacOS

## Installing homebrew

Homebrew is a package manager for Mac, we use it to install different kinds of software.
You might already have it installed.

Open a terminal window (for example through spotlight search) and type

``` bash
brew
```
and then enter.

If you get an error that says it could not find `brew`, we need to install it.

Copy this command into the terminal and hit enter:

``` bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This will take a moment. One the process finished you can go on with the next step.


## Installing git

With homebrew installed, we can install git. Git is the version control system that we use to store files and keep track of changes.

Copy or type the following command and hit enter:

``` bash
brew install git
```

This will take a moment. One the process finished you can go on with the next step.

## Cloning the repository

The repository is where the code lives. Here, basically!

We use git to tell it to copy all files from the online store on github.com to your computer locally.

Run:

``` bash
git clone https://github.com/feminizidmap/feminizidmap.org.git
```

After the process has finished, you will now see (for example in Finder) that git created a folder with all project files.

The next step happens inside the project folder, run

``` bash
cd feminizidmap.org
```

## Installing hugo

Hugo is the tool to build the website. We can also install it via Homebrew.

``` bash
brew install hugo
```

## Running the dev server

You can now use the `hugo` command.

To start a development server run

``` bash
hugo serve
```

You can find the local site on http://localhost:1313

And use Cmd+C to stop it.

Running just `hugo` will build the site once, you will find everything in the `public` folder.
