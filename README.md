# h2o-transformation

# h2o-tf

h20-transformation stands for HTML to Object Transformation.

For performance-oriented sites, where content is primarily, but not exclusively, HTML-based, 
it's useful to be able to take incoming HTML, and, when needed, "decompile" the UI, extracting out an object.  


Syntax:

```html
<my-container id=myContainer>
    <table>
        <thead>
            <tr>
                <th data-fld=myProp1>My Header 1</th>
                <th data-fld=myProp2>My Header 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Val 1</td>
                <td>Val 2</td>
            </tr>
        </tbody>
    </table>
    <ul>
        <li>Item 1
        </li>Item 2</ul>
    </ul>
</my-container>

<script type=module>
    import {h2oTF} from 'h2o-transformation/h2o-tf.js';
    import {h2oTable} from 'h2o-table/h2oTable.js';
    import {h2oLili} from 'h2o-lili/h2oLili.js';

    h2oTF(myContainer, {
        destObj: {},
        match: {
            table: ['myTableList', {props: ['prop1', 'prop2']}]
        },
        psp: [
            {
                lhsType: HTMLTableElement,
                rhsType: Array,
                ctor: h2oTable,
            },
            {
                lhsTag: HTMLUlElement,
                rhsType: Array
                ctor: h2oLili
            }
        ]
    })
</script>
```
