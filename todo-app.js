(() => {
    function createTodoTitle(title) {
        const appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm() {
        const form = document.createElement('form');
        const input = document.createElement('input');
        const buttonWrapper = document.createElement('div');
        const button = document.createElement('button');

        form.classList.add('input-group','mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn','btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        }
    }

    function createTodoList() {
        const list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        const item = document.createElement('li');
        const buttonGroup = document.createElement('div');
        const donButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        item.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group','btn-group-sm');
        donButton.classList.add('btn','btn-success');
        donButton.textContent = 'Готово';
        deleteButton.classList.add('btn','btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(donButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            donButton,
            deleteButton,
        }
    }

    function createTodoApp(container,title = 'Список дел') {
        const todoAppTitle = createTodoTitle(title);
        const todoItemForm = createTodoItemForm();
        const todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        todoItemForm.form.addEventListener('submit', e => {
            e.preventDefault();

            if(!todoItemForm.input.value) {
                return;
            }

            const todoItem = createTodoItem(todoItemForm.input.value);

            todoItem.donButton.addEventListener('click', () => {
                todoItem.item.classList.toggle('list-group-item-success');
            });

            todoItem.deleteButton.addEventListener('click', () => {
                if(confirm('Вы уверены?')) {
                    todoItem.item.remove();
                }
            });

            todoList.append(todoItem.item);

            todoItemForm.input.value = '';
        });
    }

    window.createTodoApp = createTodoApp;
}) ();

