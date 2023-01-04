import React from 'react'
import SideBar from '../../components/Admin/SideBar'
import CommandsEnCours from './CommandsEnCours'

const Commands = () => {
  
  return (
    <>
      <SideBar />
      <main class="main">
        <div class="Container p-4 ">
          <CommandsEnCours />
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

export default Commands
