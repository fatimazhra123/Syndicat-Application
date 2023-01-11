import React from 'react'

function PaiementsPage() {
  return (
    <>
      
      <main class="main">
        <div class="Container p-4 ">
          
          <div class="d-flex justify-content-between">
   
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">
              <button class="btn bg-danger px-3 text-blod Button_ajoute" data-bs-toggle="modal" data-bs-target="#send_to">Ajouter</button>
            </div>
          </div>
          <div class="table-responsive card p-2">
            <table class="table table-striped Table_responsive">
              <thead>
                <tr class="rounded tr_table">
                  <th scope="col">Montant</th>
                  <th scope="col">Date</th>
                  <th scope="col">CIN</th>
                  <th scope="col">  Numéro D'appartement</th>
                  <th scope="col">delete</th>
                  <th scope="col">update</th>
                </tr>
              </thead>
              <tbody>
                <tr class="rounded">
                  <td scope="col"> 45  </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45  </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45  </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45  </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45  </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45  </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> button</td>
                  <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute"  >Delete</button>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal fade" id="send_to" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Ajouter</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <p class="d-flex m-0 mt-3 justify-content-center" id="warning"></p>
              <div class="modal-body">
                <form action="/articles/createArticle" method="post">
                  <div class="mb-3">
                    <label for="amount" class="form-label">title</label>
                    <input type="text" class="form-control" name="title" />
                  </div>
                  <div class="mb-3">
                    <label for="amount" class="form-label">url</label>
                    <input type="text" class="form-control" name="url" />
                  </div>
                  <div class="mb-3">
                    <label for="amount" class="form-label">contenu</label>
                    <input type="text" class="form-control" name="contenu" />
                  </div>
                  <select id="recipient_" class="form-control form-control-lg mb-3" name="recipient">

                    <option value="4">best categorie</option>
                    <option value="4">awesome categorie</option>
                    <option value="4">others categorie</option>

                  </select>
                  <button type="submit" class="btn btn-primary">Ajouter</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PaiementsPage