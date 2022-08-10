package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserPostLike is a Querydsl query type for UserPostLike
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserPostLike extends EntityPathBase<UserPostLike> {

    private static final long serialVersionUID = 26105402L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserPostLike userPostLike = new QUserPostLike("userPostLike");

    public final QPost post;

    public final com.ssafy.db.entity.user.QUser user;

    public final NumberPath<Long> userPostLikeId = createNumber("userPostLikeId", Long.class);

    public QUserPostLike(String variable) {
        this(UserPostLike.class, forVariable(variable), INITS);
    }

    public QUserPostLike(Path<? extends UserPostLike> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserPostLike(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserPostLike(PathMetadata metadata, PathInits inits) {
        this(UserPostLike.class, metadata, inits);
    }

    public QUserPostLike(Class<? extends UserPostLike> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.post = inits.isInitialized("post") ? new QPost(forProperty("post"), inits.get("post")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

