const CREATE_LIST='CREATE_LIST';
const REMOVER_LETTER='REMOVER_LETTER';
const SEND_LETTER='SEND_LETTER';

const create_list = function(letters) {
  return {
    type: CREATE_LIST,
    letters:letters,
  };
}

const remover_letter = function(letterid) {
  return {
    type: REMOVER_LETTER,
    letterid:letterid,
  };
}

const send_letter = function(letterinfo) {
  return {
    type: SEND_LETTER,
    letterinfo:letterinfo,
  };
}

export {
  create_list,CREATE_LIST,
  remover_letter,REMOVER_LETTER,
  send_letter,SEND_LETTER,
}
