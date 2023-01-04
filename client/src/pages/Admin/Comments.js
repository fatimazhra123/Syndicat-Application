import React from 'react'
import SideBar from '../../components/Admin/SideBar'

const Comments = () => {
  
  return (
    <>
      <SideBar />
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Comments</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-between mt-3 fw-bold">
              <div class="d-flex">
                <p class="m-0">Show</p>
                <select class="select_style sort rounded mx-1">
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="All">All</option>
                </select>
                <p class="m-0">Entities</p>
              </div>
            </div>
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">
              <button class="btn bg-danger px-3 text-blod Button_ajoute" data-bs-toggle="modal" data-bs-target="#send_to">Ajouter</button>
            </div>
          </div>
          <div class="table-responsive card p-2">
            <table class="table table-striped Table_responsive">
              <thead>
                <tr class="rounded tr_table">
                  <th scope="col">id</th>
                  <th scope="col">title</th>
                  <th scope="col">url</th>
                  <th scope="col">contenu</th>
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

export default Comments
