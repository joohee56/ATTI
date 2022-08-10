package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserPostMention is a Querydsl query type for UserPostMention
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserPostMention extends EntityPathBase<UserPostMention> {

    private static final long serialVersionUID = 1093259367L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserPostMention userPostMention = new QUserPostMention("userPostMention");

    public final QPost post;

    public final com.ssafy.db.entity.user.QUser user;

    public final NumberPath<Long> userPostMentionId = createNumber("userPostMentionId", Long.class);

    public QUserPostMention(String variable) {
        this(UserPostMention.class, forVariable(variable), INITS);
    }

    public QUserPostMention(Path<? extends UserPostMention> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserPostMention(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserPostMention(PathMetadata metadata, PathInits inits) {
        this(UserPostMention.class, metadata, inits);
    }

    public QUserPostMention(Class<? extends UserPostMention> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.post = inits.isInitialized("post") ? new QPost(forProperty("post"), inits.get("post")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

