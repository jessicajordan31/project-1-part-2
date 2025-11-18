<template>
    <div class="outer">
        <footer class="footer">
            <table>
            <thead>
                <tr>
                <th></th>
                <th></th>
                <th id="title"><strong>Company</strong></th>
                <th id="title"><strong>Resources</strong></th>
                <th id="title"><strong>Enterprise</strong></th>
                <th id="title"><strong>Pricing</strong></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="brand-cell">
                        <img alt="Her Capital Logo" src="../assets/Her Capital.png" class="logo"/>
                        <h3>Her Capital</h3>
                    </td>

                    <td></td>
                    <td id="script">Mission</td>
                    <td id="script">Support</td>
                    <td id="script">Legal</td>
                    <td id="script"></td>
                </tr>
            </tbody>
            </table>
        </footer>
    </div>
    
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style>
.outer {
    left: -14.9%;
    width: 100vw;
    position: relative;
    transform: translateX(-50);
    padding: 0;
    box-sizing: border-box;
    margin: 2rem 0 0 0 ;
}

.footer {
  background-color: #A3BBE4;
  width: 100%;
  padding: 3rem 0;
}

.footer table {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  border-collapse: collapse;
  padding: 0 3rem;
}

.footer th,
.footer td {
  padding: 0.75rem 2rem;
  text-align: left;
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-weight: 400;
}

th{
    font-weight: bold;
}

.brand-cell {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  width: 28px;
  height: 50px;
}

.brand-cell h3{
  font-family: "Jomolhari", serif;
  font-size: 28px;
  margin: 0;
  margin-bottom: 25px;
}

#title{
    font-family: "Jomolhari", serif;
    font-size: 24px;
    font-weight: 800;
    margin: 0;
    padding-top: 20px;
}

#script{
    font-family: "Zen Kaku Gothic New", sans-serif;
    font-weight: lighter;
    font-size: 18px;
}
</style>
