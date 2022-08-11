package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserCommentLike is a Querydsl query type for UserCommentLike
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserCommentLike extends EntityPathBase<UserCommentLike> {

    private static final long serialVersionUID = 1711108563L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserCommentLike userCommentLike = new QUserCommentLike("userCommentLike");

    public final QComment comment;

    public final com.ssafy.db.entity.user.QUser user;

    public final NumberPath<Long> userCommentLikeId = createNumber("userCommentLikeId", Long.class);

    public QUserCommentLike(String variable) {
        this(UserCommentLike.class, forVariable(variable), INITS);
    }

    public QUserCommentLike(Path<? extends UserCommentLike> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserCommentLike(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserCommentLike(PathMetadata metadata, PathInits inits) {
        this(UserCommentLike.class, metadata, inits);
    }

    public QUserCommentLike(Class<? extends UserCommentLike> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.comment = inits.isInitialized("comment") ? new QComment(forProperty("comment"), inits.get("comment")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

