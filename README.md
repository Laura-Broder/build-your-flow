# Run the app

## Install node modules

In the root directory run in the terminal:

    $ cd src

    $ npm install

    $ cd client

    $ npm install

## Run the client and the server together

    $ npm run dev

## Location of saved flow.json files

/src/Flow

# Build a custom flow App spec

1. The app allows a user to build a list of custom questions and their possible answers.
2. The last item added to the list can be deleted.
3. If only one item is in the list it can not be deleted.
4. The list is saved into a .json file once finished.
5. The list can be save to a file only if it has at least 1 item in it.

## App spec

### Add new question form

1. Input field for a new question
2. Mark the type of answer
3. Input field for possible answers
4. Add button - adds the question and answers to a list

### Updated list

1. A block for each question added.
2. "Delete last item" button.
3. "Save to file" button.

## flow.json spec

1. Each file has a uniq ID number.
2. The questions list is an array inside the object.
3. Each question has:
   1. Uniq ID.
   2. question text.
   3. answer type.
   4. possible answers.
