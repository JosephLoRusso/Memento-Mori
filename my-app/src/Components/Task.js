// Creates a checkbox and info for a task
import React from "react";

function Task(props) {
  return (
    <div className="Task">
      <input type="checkbox">
      <label><a data-toggle="modal" data-target="#modalCenter">props.description</a></label><br>

      <!-- Modal -->
      <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLongTitle">props.title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              props.info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;