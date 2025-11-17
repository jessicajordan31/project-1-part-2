<template>
    <div class="table">
        <table>
            <tr>
                <th></th>
                <th></th>
                <th>Company</th>
                <th>Resources</th>
                <th>Enterprise</th>
                <th>Pricing</th>
            </tr>
            <tr>
                <td><h3>Her Capital</h3></td>
                <td><img alt="Her Capital Logo" src="../assets/Her Capital.png" style="width: 28px; height: 50px;"></img></td>
                <td>Mission</td>
                <td>Support</td>
                <td>Legal</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
      name: 'Footer',
    };
    </script>

<style>
    table{
        background-color: #465786;
        padding: 2rem;
        color: #000;
    }
    tr, td{
        padding: 30px;
    }
    h3{
        font-family: "Jomolhari", serif;
    }
    a{
        font-family: "Zen Kaku Gothic New", sans-serif;
        color: #000;
    }
</style>
