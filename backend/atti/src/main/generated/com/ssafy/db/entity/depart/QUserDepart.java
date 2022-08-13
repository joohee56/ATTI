package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserDepart is a Querydsl query type for UserDepart
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserDepart extends EntityPathBase<UserDepart> {

    private static final long serialVersionUID = -750629225L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserDepart userDepart = new QUserDepart("userDepart");

    public final QDepart depart;

    public final com.ssafy.db.entity.user.QUser user;

    public final NumberPath<Long> userDepartId = createNumber("userDepartId", Long.class);

    public QUserDepart(String variable) {
        this(UserDepart.class, forVariable(variable), INITS);
    }

    public QUserDepart(Path<? extends UserDepart> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserDepart(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserDepart(PathMetadata metadata, PathInits inits) {
        this(UserDepart.class, metadata, inits);
    }

    public QUserDepart(Class<? extends UserDepart> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.depart = inits.isInitialized("depart") ? new QDepart(forProperty("depart"), inits.get("depart")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

