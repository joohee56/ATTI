package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDepart is a Querydsl query type for Depart
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDepart extends EntityPathBase<Depart> {

    private static final long serialVersionUID = -1710098708L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDepart depart = new QDepart("depart");

    public final ListPath<Category, QCategory> categorys = this.<Category, QCategory>createList("categorys", Category.class, QCategory.class, PathInits.DIRECT2);

    public final StringPath departCode = createString("departCode");

    public final NumberPath<Long> departId = createNumber("departId", Long.class);

    public final StringPath departName = createString("departName");

    public final ListPath<DepartTagList, QDepartTagList> departTagLists = this.<DepartTagList, QDepartTagList>createList("departTagLists", DepartTagList.class, QDepartTagList.class, PathInits.DIRECT2);

    public final com.ssafy.db.entity.user.QUser user;

    public final ListPath<UserDepart, QUserDepart> userDeparts = this.<UserDepart, QUserDepart>createList("userDeparts", UserDepart.class, QUserDepart.class, PathInits.DIRECT2);

    public final ListPath<com.ssafy.db.entity.webclass.WebClass, com.ssafy.db.entity.webclass.QWebClass> webclasses = this.<com.ssafy.db.entity.webclass.WebClass, com.ssafy.db.entity.webclass.QWebClass>createList("webclasses", com.ssafy.db.entity.webclass.WebClass.class, com.ssafy.db.entity.webclass.QWebClass.class, PathInits.DIRECT2);

    public QDepart(String variable) {
        this(Depart.class, forVariable(variable), INITS);
    }

    public QDepart(Path<? extends Depart> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDepart(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDepart(PathMetadata metadata, PathInits inits) {
        this(Depart.class, metadata, inits);
    }

    public QDepart(Class<? extends Depart> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

