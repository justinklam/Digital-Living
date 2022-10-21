import React from "react";
import { Link } from "react-router-dom";

// Image assets
import editIcon from "../img/edit.png";
import deleteIcon from "../img/delete.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img2"
          />
          <div className="info">
            <span>user1</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img className="edit-inner" src={editIcon} alt="edit" />
            </Link>
            <Link>
              <img className="delete-inner" src={deleteIcon} alt="delete" />
            </Link>
          </div>
        </div>
        <h1>This is the title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo a
          lectus rutrum ornare ac laoreet lorem. Cras sit amet purus sed arcu
          tempus iaculis. Fusce consequat eros ex, sit amet pretium arcu
          sagittis id. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Pellentesque vel commodo lacus, aliquet interdum metus.
          Aliquam condimentum leo et vestibulum vehicula. Vivamus lobortis
          finibus augue a pellentesque. Fusce quis ligula nulla. In hac
          habitasse platea dictumst. Integer egestas ipsum in nisl suscipit
          semper. Nam eu rhoncus massa. Fusce a imperdiet lacus. In felis
          tellus, feugiat tempor orci quis, condimentum posuere leo. Etiam at
          commodo dolor, sed porttitor est. Vestibulum sit amet purus sit amet
          quam rutrum fermentum. Cras eget sagittis ipsum. Morbi euismod viverra
          risus, at ultrices dolor fermentum et. Mauris eu fermentum lacus. Nam
          pulvinar porttitor arcu id feugiat. Quisque libero arcu, finibus ac
          mauris id, convallis dapibus metus. Donec eu nisi sed mauris ornare
          cursus. Cras vel urna diam. Sed lobortis accumsan finibus. Etiam
          bibendum consequat lorem, eget congue ligula maximus non. Curabitur
          mattis congue nulla at molestie. Mauris varius justo risus, non
          viverra nulla scelerisque sed. Vestibulum placerat id nibh in maximus.
          Quisque dui nulla, rutrum vel hendrerit sit amet, facilisis et sapien.
          Pellentesque mi nisi, egestas vel dolor non, volutpat consequat ex.
          Maecenas ac tempor neque, et venenatis magna. Interdum et malesuada
          fames ac ante ipsum primis in faucibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo a
          lectus rutrum ornare ac laoreet lorem. Cras sit amet purus sed arcu
          tempus iaculis. Fusce consequat eros ex, sit amet pretium arcu
          sagittis id. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Pellentesque vel commodo lacus, aliquet interdum metus.
          Aliquam condimentum leo et vestibulum vehicula. Vivamus lobortis
          finibus augue a pellentesque. Fusce quis ligula nulla. In hac
          habitasse platea dictumst. Integer egestas ipsum in nisl suscipit
          semper. Nam eu rhoncus massa. Fusce a imperdiet lacus. In felis
          tellus, feugiat tempor orci quis, condimentum posuere leo. Etiam at
          commodo dolor, sed porttitor est. Vestibulum sit amet purus sit amet
          quam rutrum fermentum. Cras eget sagittis ipsum. Morbi euismod viverra
          risus, at ultrices dolor fermentum et. Mauris eu fermentum lacus.
        </p>
      </div>
      <div className="menu">Menu</div>
    </div>
  );
};

export default Single;
