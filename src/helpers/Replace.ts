export type Replace<T, R> = Omit<T, keyof R> & R;
//esse codigo basicamente é uma helper function do typescript que diz que vai receber duas typagem, uma original e uma substituta. Ou certo, tal classe ou constructor pode receber uma nova typagem em determinados momentos.
